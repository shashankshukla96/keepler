import React from "react";
import SettingsSection from "./../components/SettingsSection";
import { useRouter } from "./../util/router.js";
import { requireAuth } from "./../util/auth.js";

function SettingsPage(props) {
  const router = useRouter();

  return (
    <SettingsSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      section={router.query.section}
      key={router.query.section}
    ></SettingsSection>
  );
}

export default requireAuth(SettingsPage);
