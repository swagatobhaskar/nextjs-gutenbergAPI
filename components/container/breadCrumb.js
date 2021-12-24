import { useRouter } from "next/router";

export default function BreadCrumb() {
    const router = useRouter();
    let pageName = router.asPath;
    return (
        <h3 className="text-red-600">
            Home{pageName}
        </h3>
    )
}