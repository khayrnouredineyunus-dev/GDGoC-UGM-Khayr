import { useEffect, useState } from "react";

// Mengamati beberapa section dan mengembalikan id section yang sedang terlihat
// di layar. Dipakai untuk menandai link aktif di navigasi section.
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);
  const idsKey = ids.join(",");

  useEffect(() => {
    const elements = idsKey
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      // Section dianggap aktif saat berada di sekitar sepertiga atas layar
      { rootMargin: "-30% 0px -60% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}
