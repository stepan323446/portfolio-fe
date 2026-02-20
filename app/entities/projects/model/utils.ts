import type { ProjectStatus, ProjectType } from "../api/types";

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  commercial: "Commercial",
  pet: "Pet Project",
  open_source: "Open Source",
  startup: "Startup"
}

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  planning: "Planning",
  in_progress: "In Progress",
  realesed: "Realesed",
  archive: "Archive"
}