import { useEffect } from "react";

const SITE = "Huynh Nguyen Phuc";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} - ${SITE}` : SITE;
  }, [title]);
}
