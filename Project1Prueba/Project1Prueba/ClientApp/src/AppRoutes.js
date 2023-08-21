import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { Card } from "./components/fetch";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
      element: <Counter template={"https://emailtemplatecreatordigifact.s3.us-east-2.amazonaws.com/DigifactTemplates/sample2.html"} />
    },
    {
        path: '/fetch',
        element: <Card />
    }
];

export default AppRoutes;
