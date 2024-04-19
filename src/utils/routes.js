export const ROUTE_MAIN = "/";
export const ROUTE_LIBRARY = "/library";
export const ROUTE_LIBRARY_EXTRACTION_MAPS = "/library/extraction-maps";
export const ROUTE_LIBRARY_ENTITIES = "/library/entities";
export const ROUTE_SUBMISSION_FOLDERS = "/submission-folders";
export const ROUTE_SUBMISSION_FOLDER_VIEW = (id = ":id") =>
  `/submission-folders/${id}`;
export const ROUTE_SUBMISSION_FOLDER_VIEW_LIBRARY = (id = ":id") =>
  `/submission-folders/${id}/library`;
export const ROUTE_SUBMISSION_FOLDER_VIEW_LIBRARY_ENTITIES = (id = ":id") =>
  `/submission-folders/${id}/library/entities`;
export const ROUTE_SUBMISSION_FOLDER_VIEW_LIBRARY_EXTRACTION_MAPS = (
  id = ":id",
) => `/submission-folders/${id}/library/extraction-maps`;
export const ROUTE_NOT_EXIST_404 = "*";
