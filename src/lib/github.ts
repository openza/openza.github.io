interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  assets: GitHubAsset[];
}

export interface ProjectRelease {
  version: string;
  releaseUrl: string;
  assets: {
    windows: string | null;
  };
}

export const TASKS_STORE_URL = 'https://apps.microsoft.com/detail/9NQGDKXGRGF8';
export const TASKS_FALLBACK_VERSION = 'v1.0.1';
export const READER_STORE_URL = 'https://apps.microsoft.com/detail/9NNPMN0JSSW5?hl=en-us&gl=IN';
export const READER_FALLBACK_VERSION = 'v1.1.0';
export const FLOW_FALLBACK_VERSION = 'WinUI pre-release';

export async function getLatestRelease(repo: string): Promise<ProjectRelease | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/openza/${repo}/releases/latest`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      }
    );

    if (!response.ok) {
      console.warn(`GitHub API returned ${response.status} for ${repo}`);
      return null;
    }

    const data: GitHubRelease = await response.json();

    return {
      version: data.tag_name,
      releaseUrl: data.html_url,
      assets: {
        windows: data.assets.find(a => a.name.endsWith('.exe'))?.browser_download_url ?? null,
      }
    };
  } catch (error) {
    console.error(`Failed to fetch release for ${repo}:`, error);
    return null;
  }
}

export async function getAllProjectReleases() {
  const [tasks, reader] = await Promise.all([
    getLatestRelease('tasks'),
    getLatestRelease('reader')
  ]);

  return { tasks, reader };
}
