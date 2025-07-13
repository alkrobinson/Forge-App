import { WebTriggerRequest, WebTriggerResponse } from "@forge/api";

export function listener(req: WebTriggerRequest): WebTriggerResponse {
  console.log('Req:', req);
  try {
    
    return {
      body: '{"hello": "worlds"}',
      headers: {
        'Content-Type': ['application/json']
      },
      statusCode: 200,
      statusText: 'OK',
    };
  } catch (error) {

    return {
      body: JSON.stringify(error),
      headers: { "Content-Type": ["application/problem+json"] },
      statusCode: 400,
      statusText: "Bad Request",
    }

  }
};