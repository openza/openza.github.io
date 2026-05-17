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
    appimage: string | null;
    flatpak: string | null;
  };
}

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
        appimage: data.assets.find(a => a.name.endsWith('.AppImage'))?.browser_download_url ?? null,
        flatpak: data.assets.find(a => a.name.endsWith('.flatpak'))?.browser_download_url ?? null,
      }
    };
  } catch (error) {
    console.error(`Failed to fetch release for ${repo}:`, error);
    return null;
  }
}

export async function getAllProjectReleases() {
  const [flow] = await Promise.all([
    getLatestRelease('flow')
  ]);

  return { tasks: null, flow };
}
