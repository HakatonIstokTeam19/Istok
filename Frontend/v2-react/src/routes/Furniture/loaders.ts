import { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router-dom';

export async function furnitureLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
   console.log(searchParams);
   return { test: true }
  }
  
  export async function furnitureAction({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    console.log(formData);
    return { test: true }
  }