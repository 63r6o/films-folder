import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const workSans = Work_Sans({ subsets: ["latin"] });

export const pleaturesOutline = localFont({
    src: "../../public/fonts/PleaturesDemoOutline.otf",
});

export const pleatures = localFont({
    src: "../../public/fonts/PleaturesDemoRegular.otf",
});
