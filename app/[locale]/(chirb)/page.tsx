import { getTranslations } from "next-intl/server";

const ChirbPage =async () => {
  const t = await getTranslations("HomePage");

  return (
    <div>
    <h1>{t("title")}</h1>
    
  </div>
  );
};

export default ChirbPage;
