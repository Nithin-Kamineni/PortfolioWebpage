// const Flip = require("react-reveal/Flip");
const Flip = require('../../modules/react-reveal/Flip');
import { motion } from "framer-motion";

import { BlogCard } from "../../components/BlogCard/BlogCard";
import { BlogsData } from "../../data/BlogData";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./blogs.module.scss";
import { ChakraProvider } from "@chakra-ui/react";

const blogsOpen = "<blogs>";
const blogsClose = "</blogs>";

const Blogs = () => {
  return (
    <div className={styles.projects}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.projectsOpen}>{blogsOpen}</h3>

          <div style={{position: 'relative', height:'100%', zIndex:1}} className={styles.projects_content}>
          <ChakraProvider>
            {BlogsData.map((item, index) =>
              index % 2 === 0 ? (
                <Flip top key={item.title}>
                  <BlogCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    url={item.url}
                    blogTags={item.blogTags}
                  />
                </Flip>
              ) : (
                <Flip bottom key={item.title}>
                  <BlogCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    url={item.url}
                    blogTags={item.blogTags}
                  />
                </Flip>
              )
            )}
            </ChakraProvider>
          </div>

          <h3 className={styles.projectsClose}>{blogsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;



