import { useInquiryCategory } from "../hooks/useInquiryCategory";
import ContactIntro from "../components/contact/ContactIntro";
import ContactWorkspace from "../components/contact/ContactWorkspace";
import GuidanceSection from "../components/contact/GuidanceSection";

export default function Contact() {
  const { categories, loading, error, retry, selected, selectCategory } =
    useInquiryCategory();

  return (
    <>
      <title>Contact | GDGoC UGM</title>
      <ContactIntro />
      <ContactWorkspace
        categories={categories}
        loading={loading}
        error={error}
        onRetry={retry}
        selectedId={selected?.id ?? ""}
        onSelect={selectCategory}
      />
      <GuidanceSection />
    </>
  );
}
