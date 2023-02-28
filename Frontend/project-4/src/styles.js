const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "px-6 py-4 sm:px-16 sm:py-12 ",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  margin: "mx-6 my-6 sm:mx-16 sm:my-16"
};

export const layout = {
  div: `flex md:flex-row ${styles.paddingY}`,
  divReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`,

  divImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  divImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  divInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
