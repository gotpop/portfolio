import GridWrap from "@/components/GridWrap"
import Image from "next/image"
import { Inter } from "@next/font/google"
import { Key } from "react"
import ProjectList from "@/components/project"
import { client } from "client"
import { groq } from "next-sanity"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

async function getProjects() {
  const data = await client.fetch(groq`*[_type == "project"] | order(orderRank)`)

  return data
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className={styles.grid}>
      {projects.map((project: { _id: Key | null | undefined }) => (
        <>
          <ProjectList key={project._id} project={project} />
        </>
      ))}
    </div>
  )
}