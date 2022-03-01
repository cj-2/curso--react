import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    async (req, res, ctx) => {
      return res(
        ctx.json([
          { userId: 1, id: 1, title: "title1", body: "body1" },
          { userId: 2, id: 2, title: "title2", body: "body2" },
          { userId: 3, id: 3, title: "title3", body: "body3" },
        ])
      );
    }
  ),
  rest.get(
    "https://jsonplaceholder.typicode.com/photos",
    async (req, res, ctx) => {
      return res(
        ctx.json([
          { url: "img1.jpg" },
          { url: "img2.jpg" },
          { url: "img3.jpg" },
        ])
      );
    }
  ),
]; // handers de interceptação.
