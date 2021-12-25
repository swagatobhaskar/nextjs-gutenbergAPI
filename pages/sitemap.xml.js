const EXTERNAL_DATA_URL = 'https://gutendex.com/books/'

function generateSiteMap(books) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://gutendex.com/books/</loc>
     </url>
     <url>
       <loc>https://gutendex.com/books/</loc>
     </url>
     ${books.results
       .map((book) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${book.id}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL)
    const books = await request.json()

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(books)

    res.setHeader('Content-Type', 'text/xml')
    // we send the XML to the browser
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}

export default SiteMap