import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGStory from "./components/IGStory";

import IGUser from "components/IGUser";

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* 左邊 */}
          <div className="w-full lg:w-[600px]">
            <IGStory />
          </div>
          {/* 右邊 */}
          <div className="hidden lg:block lg:w-[424px]">
            <IGUser
              account="alex"
              location="taiwan"
              avatar="/images/avatars/a1.png"
            />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
