import React from 'react';
import Link from 'next/link';

function Blog() {
  return (
    <section className="blog mt-[100px] mb-[10px] md:mb-[200px] text-center px-3 sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-[50%]">
      <h1 className="section-title text-2xl sm:text-4xl poppins font-bold mb-12">Read My Blog</h1>
      {/* <h3 className="text-xl text--colors_secondary mt-6 mb-6 lg:mb-12 poppins">
        A collection of my recently published articles.
      </h3> */}
      <div className="blog-posts text-[12px] sm:text-[14px]">
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
          <div className="post-brief mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
            nostrum nulla expedita. Iste quidem dolor at fuga sunt.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <Link className="underline text--colors_primary" href="/blog">
              Read post
            </Link>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
          <div className="post-brief mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
            nostrum nulla expedita. Iste quidem dolor at fuga sunt.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a className="underline text--colors_primary" href="g.com">
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
          <div className="post-brief mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
            nostrum nulla expedita. Iste quidem dolor at fuga sunt.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a className="underline text--colors_primary" href="g.com">
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
          <div className="post-brief mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
            nostrum nulla expedita. Iste quidem dolor at fuga sunt.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a className="underline text--colors_primary" href="g.com">
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
          <div className="post-brief mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
            nostrum nulla expedita. Iste quidem dolor at fuga sunt.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a className="underline text--colors_primary" href="g.com">
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-12">
          <div className="post-title text-[17px] font-bold poppins">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
          <div className="post-brief mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
            nostrum nulla expedita. Iste quidem dolor at fuga sunt.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a className="underline text--colors_primary" href="g.com">
              Read post
            </a>
          </div>
        </div>
        <div className="blog-link">
          <button
            type="button"
            className="text-white connect btn--regular px-6 py-3 w-full sm:mt-12 xsm:w-[400px] text-[14px]"
          >
            Explore my blog
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
