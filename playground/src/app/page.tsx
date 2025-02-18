// import { FormWithReactHooksForm } from "./component/Form-with-react-hooks-form";
// import { FormWithoutReactHooksForm } from "./component/Form-without-react-hooks-form";
// import { FormWithRhfAndZod } from "./component/Form-with-rhf-and-zod";
import { FormWithRhfAndZodAndServer } from "./component/Form-with-rhf-and-zod-and-server";
import { Header } from "./component/Header";

export default function Home() {
  return (
  <>  
    <Header/>
    <main className={'flex min-h-screen flex-col items-center justify-between p-24'}>
      {/* <FormWithoutReactHooksForm/> */}
      {/* <FormWithReactHooksForm/> */}
      {/* <FormWithRhfAndZod/> */}
      <FormWithRhfAndZodAndServer/>
    </main>
  </>
  );
}
