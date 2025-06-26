import { getNewsItem } from "@/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";

export default async function InterceptedNewsPage({ params }) {
  const newsItem = await getNewsItem(params.slug);
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </dialog>
    </>
  );
}
