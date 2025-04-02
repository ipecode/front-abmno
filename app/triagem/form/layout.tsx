import Layout from "@components/Triagem/Layout/Layout"

export default function TriagemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}