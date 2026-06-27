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
export const READER_STORE_URL = 'https://apps.microsoft.com/detail/9NNPMN0JSSW5';
export const READER_FALLBACK_VERSION = 'v1.1.0';
export const FLOW_FALLBACK_VERSION = 'v0.1.0';

export async function getLatestRelease(repo: string, options: { includePrereleases?: boolean } = {}): Promise<ProjectRelease | null> {
  try {
    if (options.includePrereleases) {
      const response = await fetch(
        `https://api.github.com/repos/openza/${repo}/releases`,
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

      const releases: GitHubRelease[] = await response.json();
      const data = releases.find(release => !release.draft);

      return data ? mapRelease(data) : null;
    }

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

    return mapRelease(data);
  } catch (error) {
    console.error(`Failed to fetch release for ${repo}:`, error);
    return null;
  }
}

function mapRelease(data: GitHubRelease): ProjectRelease {
  return {
    version: data.tag_name,
    releaseUrl: data.html_url,
    assets: {
      windows: data.assets.find(a => a.name.endsWith('.exe'))?.browser_download_url ?? null,
    }
  };
}

export async function getAllProjectReleases() {
  const [tasks, reader, flow] = await Promise.all([
    getLatestRelease('tasks'),
    getLatestRelease('reader'),
    getLatestRelease('flow', { includePrereleases: true })
  ]);

  return { tasks, reader, flow };
}
