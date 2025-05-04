import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div className="lg:flex lg:items-center lg:space-x-12">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="シェフ"
          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
        />
      </div>

      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">情熱を麺に込めて</h3>
          <p className="mb-4">
            1993年に新宿で創業した当店は、イタリアで修業したシェフ佐藤が「本当のアルデンテをどこよりも美味しく提供したい」という情熱から生まれました。
          </p>
          <p className="mb-6">
            厳選した小麦粉を使用し、毎日手打ちで仕上げる自家製麺。絶妙なアルデンテの食感とコシの強さが自慢です。
            何度も足を運んでくださるお客様の笑顔が、私たちの最高の喜びです。
          </p>

          <div ref={ref} className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-600">
                {isInView && <CountUp end={30} duration={2.5} />}
                <span>年</span>
              </div>
              <p className="text-sm mt-1">伝統の歴史</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-600">
                {isInView && <CountUp end={50000} duration={2.5} separator="," />}
                <span>皿</span>
              </div>
              <p className="text-sm mt-1">年間パスタ提供数</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
