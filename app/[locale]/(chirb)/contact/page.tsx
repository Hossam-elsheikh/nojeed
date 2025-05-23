import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("ContactPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default page;
