import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Montserrat_Alternates } from "next/font/google";

import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Calmighty",
  description: "Успокойся. Расслабься.",
};

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={montserratAlternates.className}>
        <I18nProvider>
          <Root>{children}</Root>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
