/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { IRouter } from 'kibana/server';
import { PLUGIN_ID, ENROLLMENT_API_KEY_ROUTES } from '../../constants';
import {
  GetEnrollmentAPIKeysRequestSchema,
  GetOneEnrollmentAPIKeyRequestSchema,
  DeleteEnrollmentAPIKeyRequestSchema,
  PostEnrollmentAPIKeyRequestSchema,
} from '../../types';
import {
  getEnrollmentApiKeysHandler,
  getOneEnrollmentApiKeyHandler,
  deleteEnrollmentApiKeyHandler,
  postEnrollmentApiKeyHandler,
} from './handler';

export const registerRoutes = (router: IRouter) => {
  router.get(
    {
      path: ENROLLMENT_API_KEY_ROUTES.INFO_PATTERN,
      validate: GetOneEnrollmentAPIKeyRequestSchema,
      options: { tags: [`access:${PLUGIN_ID}`] },
    },
    getOneEnrollmentApiKeyHandler
  );

  router.delete(
    {
      path: ENROLLMENT_API_KEY_ROUTES.DELETE_PATTERN,
      validate: DeleteEnrollmentAPIKeyRequestSchema,
      options: { tags: [`access:${PLUGIN_ID}`] },
    },
    deleteEnrollmentApiKeyHandler
  );

  router.get(
    {
      path: ENROLLMENT_API_KEY_ROUTES.LIST_PATTERN,
      validate: GetEnrollmentAPIKeysRequestSchema,
      options: { tags: [`access:${PLUGIN_ID}`] },
    },
    getEnrollmentApiKeysHandler
  );

  router.post(
    {
      path: ENROLLMENT_API_KEY_ROUTES.CREATE_PATTERN,
      validate: PostEnrollmentAPIKeyRequestSchema,
      options: { tags: [`access:${PLUGIN_ID}`] },
    },
    postEnrollmentApiKeyHandler
  );
};
