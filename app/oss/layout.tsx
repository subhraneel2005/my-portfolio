import { Metadata } from "next";

export const metadata: Metadata = {
    title: "proof of work | subhraneel",
    description: "my contributions to opensource and projects i like to built",
    openGraph: {
        title: "oss | subhraneel",
        description: "your friendly neighbourhood spoiderman",
        images: ["/pow-opengraph.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "proof of work | subhraneel",
        description: "my contributions to opensource and projects i like to built",
        images: ["/pow-opengraph.png"],
    },
};

export default function OSSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}