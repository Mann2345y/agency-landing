import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export default function Home() {
  return (
    <>
      <Banner />
      <ScrollAnimationWrapper animation="fadeUp" delay={0}>
        <Services />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animation="fadeUp" delay={200}>
        <Portfolio />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animation="fadeUp" delay={100}>
        <Team />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animation="fadeUp" delay={0}>
        <Footer />
      </ScrollAnimationWrapper>
    </>
  );
}
