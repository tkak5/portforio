import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const worksDirectory = path.join(process.cwd(), 'works')


export function getAllWorksData() {
    const fileNames = fs.readdirSync(worksDirectory)
    const allWorksData = fileNames.map(fileName => {
        //remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '').toString()

        //Read markdown file as string
        const fullPath = path.join(worksDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        //Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    
    //Sort posts by date
    return allWorksData
}

