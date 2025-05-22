import { connectToDB } from "@/lib/mongo";
import { Article } from "@/models/Article";
import DashboardTable from "@/components/DashboardTable";

export default async function ArticolePage() {
  await connectToDB();
  const rawArticles = (await Article.find().lean()) as Array<{ _id: any }>;

  const articles = rawArticles.map((a) => ({
    ...a,
    _id: a._id.toString(),
  }));

  return (
    <DashboardTable
      title="Articole"
      data={articles}
      createLink="/dashboard/articole/new"
      viewPrefix="dashboard/articole"
      editPrefix="articole/edit"
      type="article"
    />
  );
}
