import { useRouter } from "next/router";

export default function BreadCrumb() {
    const router = useRouter();
    let pageName = router.asPath;
    
    return (
        <div className="relative inline-block text-blue-400 text-xs md:text-sm font-sans">
            <p className="absolute top-0 left-[10px] md:left-[80px]">Home{pageName}</p>
        </div>
    )
}