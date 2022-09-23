import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import { postquery, configQuery, allcatquery } from "@lib/groq";
import ProjectList from "@components/projectlist";
import CategoryLabel from "@components/projects/category";

export default function Skills(props) {
  const { postdata, siteconfig, preview, categorydata } = props;
  const router = useRouter();

  const { data: projects } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: categories } = usePreviewSubscription(allcatquery, {
    initialData: categorydata,
    enabled: preview || router.query.preview !== undefined
  });

  return (
    <>
      {projects && siteConfig && (
        <Layout {...siteConfig}>
          <Container>
          <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Skills</h2>
            <div className="flex my-6">
              <CategoryLabel categories={categories} />
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {projects.map(project => (
                <ProjectList
                  key={project._id}
                  project={project}
                  aspect="square"
                />
              ))}
            </div>
          </Container>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postquery);
  const config = await getClient(preview).fetch(configQuery);
  const categoriesList = await getClient(preview).fetch(allcatquery);

  return {
    props: {
      postdata: post,
      categorydata: categoriesList,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
