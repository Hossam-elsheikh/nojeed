import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { site } from '@/lib/site'

interface ContactPayload {
    name?: string
    email?: string
    projectType?: string
    message?: string
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
    const body = (await request.json().catch(() => null)) as ContactPayload | null
    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const projectType = body?.projectType?.trim()
    const message = body?.message?.trim()

    if (!name || !email || !projectType || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const appPassword = process.env.GMAIL_APP_PASSWORD
    if (!appPassword) {
        console.error(
            'GMAIL_APP_PASSWORD is not set — cannot deliver contact form submissions. See .env.example.'
        )
        return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: site.email, pass: appPassword },
    })

    try {
        await transporter.sendMail({
            from: `"Nojeed Website" <${site.email}>`,
            to: site.contactRecipient,
            replyTo: email,
            subject: `New project inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nMessage:\n${message}`,
            html: `
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
            `,
        })
        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error('Failed to send contact form email:', error)
        return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
    }
}
