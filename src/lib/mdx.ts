import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export type MDXData = {
    metadata: {
        [key: string]: any;
    };
    slug: string;
    content: string;
};

export function getFiles(dir: string) {
    return fs.readdirSync(path.join(root, "content", dir));
}

export function getFileBySlug(dir: string, slug: string): MDXData {
    const filePath = path.join(root, "content", dir, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
        metadata: data,
        slug,
        content,
    };
}

export function getAllFiles(dir: string): MDXData[] {
    const files = getFiles(dir);

    return files.map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        return getFileBySlug(dir, slug);
    });
}
