import "dotenv/config";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecsp from "aws-cdk-lib/aws-ecs-patterns";

const { KC_BOOTSTRAP_ADMIN_USERNAME = "", KC_BOOTSTRAP_ADMIN_PASSWORD = "" } =
  process.env;
const keycloakImage = "quay.io/keycloak/keycloak";
const keycloakTag = "26.0";

export class CdkKeycloakTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ecsp.ApplicationLoadBalancedFargateService(this, "Keycloak", {
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry(
          `${keycloakImage}${keycloakTag}`
        ),
        containerPort: 8080,
        command: ["start-dev"],
        environment: {
          KC_BOOTSTRAP_ADMIN_USERNAME,
          KC_BOOTSTRAP_ADMIN_PASSWORD,
        },
      },
      publicLoadBalancer: true,
    });
  }
}
