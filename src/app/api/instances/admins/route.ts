import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      "id": "6cef3e44-41b8-4daf-ae78-54aeec9e12da",
      "user_detail": {
        "id": "77d86ba1-93ca-4d4f-b07d-2f5219eedd65",
        "first_name": "Phung",
        "last_name": "Tien Dung",
        "avatar": "",
        "is_bot": false,
        "display_name": "tiendung0325",
        "email": "tiendung0325@gmail.com",
        "last_login_medium": "email"
      },
      "created_at": "2024-11-23T15:39:07.770294Z",
      "updated_at": "2024-11-23T15:39:07.770310Z",
      "deleted_at": null,
      "role": 20,
      "is_verified": false,
      "created_by": null,
      "updated_by": null,
      "user": "77d86ba1-93ca-4d4f-b07d-2f5219eedd65",
      "instance": "27b46ffb-1b46-477e-b6e2-da9efdac00c7"
    }
  ]);
}
