export type OgpData = {
  title: string
  description: string
  faviconUrl: string
  pageUrl: string
  ogImgUrl: string
}

export interface OgpDataProps {
  ogpData: OgpData
}

export interface OgpDataListProps {
  ogpDatas: OgpData[]
}
