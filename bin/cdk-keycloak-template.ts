#!/usr/bin/env node
import "dotenv/config";
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkKeycloakTemplateStack } from "../lib/cdk-keycloak-template-stack";

const {
  CDK_DEFAULT_ACCOUNT = "",
  CDK_DEFAULT_REGION = "",
  AWS_ACCOUNT = CDK_DEFAULT_ACCOUNT,
  AWS_REGION = CDK_DEFAULT_REGION,
} = process.env;

const app = new cdk.App();
console.log({ account: AWS_ACCOUNT, region: AWS_REGION });
new CdkKeycloakTemplateStack(app, "CdkKeycloakTemplateStack", {
  env: { account: AWS_ACCOUNT, region: AWS_REGION },
});
