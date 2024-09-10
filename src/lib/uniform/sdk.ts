import {
  DataSourceClient,
  CanvasClient,
  LocaleClient,
} from "@uniformdev/canvas";
import { ProjectMapClient } from "@uniformdev/project-map";
import { uniformApiKey } from "../utils/env";

export type Locale = {
  displayName: string;
  locale: string;
  group: string;
  tags: string[];
  order: number;
};

export async function getProjectTree(projectId: string) {
  const client = new ProjectMapClient({
    apiKey: uniformApiKey,
    projectId,
  });

  try {
    const response = await client.getNodes({
      tree: true,
      withRedirectData: true,
      withCompositionUIStatus: true,
      withCompositionData: true,
    });
    return response.tree;
  } catch (error) {
    console.error("Error fetching project tree:", error);
    throw error;
  }
}

export async function getComposition(projectId: string, compositionId: string) {
  const client = new CanvasClient({
    apiKey: uniformApiKey,
    projectId,
  });

  try {
    const response = await client.getCompositionById({ compositionId });
    return response.composition;
  } catch (error) {
    console.error("Error fetching composition:", error);
    throw error;
  }
}

export async function getDataSource(projectId: string, dataSourceId: string) {
  const client = new DataSourceClient({
    projectId,
    apiKey: uniformApiKey,
  });

  try {
    const response = await client.get({ dataSourceId });
    return response.result;
  } catch (error) {
    console.error("Error fetching data source:", error);
    throw error;
  }
}

export async function getProjectLocales(projectId: string) {
  const client = new LocaleClient({
    apiKey: uniformApiKey,
    projectId,
  });

  try {
    const response = await client.get();
    return response.results;
  } catch (error) {
    console.error("Error fetching project locales:", error);
    throw error;
  }
}
