import { useEffect } from "react";

const SITE = "Phuc Huynh";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} - ${SITE}` : SITE;
  }, [title]);
}
