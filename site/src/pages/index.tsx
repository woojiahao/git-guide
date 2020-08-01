import * as React from "react"
import Layout from "../components/layout/layout"
import "./index.css"

const Index = () => (
  <Layout>
    <h1>Git Guide</h1>
    <h2 className="subtitle">
      An introduction to the Git version control system designed for Singapore Polytechnic's DIT SEP module.
    </h2>

    <h2>Objectives</h2>
    <p>
      This guide aims to provide developers with a broad understanding of the Git version control system and a common
      Git workflow. It does not go into depth on a variety of complex Git commands. Those can be picked up once you have
      developed an intuition for Git.
    </p>

    <p>
      Git is a vast topic and it will be impossible to cover the entirety of the Git tooling in a single session.
      Additional resources have been added below for your reference. You are encouraged to explore beyond what is taught
      to better understand Git.
    </p>

    <p>
      While this guide was written with the students of DIT in mind, it is applicable to all other developers who are
      new and wish to learn more about Git - beyond just memorising a set of commands to type into your terminal.
    </p>

    <h2>Usage</h2>
    <p>
      To get the most out of this guide, it is recommended that you give chapters one through five a thorough read. Each
      chapter tackles a different aspect of Git and relies on knowledge of prior chapters to accelerate your learning.
      Chapter six through eight are supplements. They cover slightly more advanced topics in Git that may come in handy
      in the future but are not necessary when starting out.
    </p>

    <p>
      However, as with anything related to programming, the best learning is always independent learning. So as much as
      each chapter provides based exercises for you to follow along, you will benefit greatly from playing around with
      each chapter and trying out different variations of the commands to gain a firm grasp of what they do.
    </p>

    <p>
      The list of chapters can be found in the sidebar to the left.
    </p>

    <h2>Recommended resources</h2>
    <ul>
      <li>
        <a href="https://git-scm.com/book/en/v2">Pro Git</a>
      </li>
      <li>
        <a href="https://missing.csail.mit.edu/2020/version-control/">The Missing Semester - Version Control (Git)</a>
      </li>
    </ul>
  </Layout>
)

export default Index
