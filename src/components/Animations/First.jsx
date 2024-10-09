/* eslint-disable import/no-extraneous-dependencies */
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

function FirstAnimation() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()
  return (
    <>
      {/* first */}
      <motion.div
        class="bg-blue-600 h-2.5 rounded-full sticky top-0"
        style={{ scaleX: scrollYProgress, width: '100%' }}
      />
      <motion.div
        className="h-24 w-24 bg-green-300 mx-auto mt-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 0, 360, 90, 0],
          borderRadius: ['0%', '50%', '50%', '0%'],
        }}
        whileTap={{ scale: 0.5, transition: 0.1 }}
        transition={{ duration: 1 }}
      />
      {/* 2nd */}
      <div className="bg-red-400 h-50 w-fit mx-auto p-5">
        <motion.div
          className="mx-auto mt-5"
          drag
          initial={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        >
          <h1>hello world</h1>
        </motion.div>
      </div>
      {/* 3rd */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ root: scrollRef }}
      >
        <h1>lorem500</h1>
      </motion.div>
      {/* 4th */}

      <h1>
        {useScroll}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        fugit maxime a inventore consequuntur doloremque nulla labore eos,
        facilis est non recusandae perspiciatis rem maiores magnam! Fuga sit id
        soluta aspernatur, vel neque ullam aperiam porro laudantium facere
        consequuntur distinctio ab iste tempore ducimus ea possimus ex
        voluptates odit modi beatae eligendi harum inventore? Voluptates
        delectus necessitatibus natus sit cumque vero pariatur, maxime atque
        voluptate molestias alias fuga soluta harum molestiae tenetur quas
        obcaecati nihil omnis cupiditate tempora possimus iste sint culpa
        consectetur! Nostrum eaque ad a atque qui sed temporibus cupiditate
        molestiae, totam distinctio quaerat pariatur, odio dolore quidem ipsum
        nesciunt deleniti, officia assumenda laboriosam sequi eius iusto quam!
        Omnis, unde beatae? Quod, nam necessitatibus. Rem, nobis maiores. Error
        vero consequuntur a nobis debitis eligendi sapiente maiores id impedit
        exercitationem. Placeat officiis aperiam ducimus quibusdam odit
        repellendus incidunt. Tenetur nihil quo nisi fugit qui natus,
        necessitatibus ullam, eligendi quaerat sit cumque consectetur iure
        numquam assumenda quidem a rerum veritatis consequuntur eius aut ex?
        Laboriosam, ipsa! Quae architecto asperiores animi inventore nostrum
        culpa ipsa tempora cum debitis nemo saepe explicabo dolor ut nesciunt
        facilis iure id impedit praesentium, excepturi et eveniet, quibusdam,
        doloribus neque! Quos atque totam tempora quas maxime! Ratione, ab! Quis
        neque a suscipit, recusandae aperiam sit eius, saepe inventore aliquid
        laudantium eveniet soluta ad vero! Id incidunt, praesentium ducimus
        laudantium, quae sequi maxime beatae rerum eaque maiores magni, quas qui
        cumque eius? Rerum hic distinctio alias porro voluptatibus quibusdam
        tenetur? Excepturi nostrum saepe modi est. Doloribus officia odit ea,
        recusandae earum minus amet cupiditate et, illo, blanditiis optio
        excepturi. Itaque laudantium, reprehenderit ullam fugit quibusdam quo
        laboriosam. Quaerat voluptate vel, dolorum nemo perferendis veniam vitae
        ad magnam est quo magni. Magnam tempora repudiandae distinctio odit
        quasi. Expedita consectetur placeat aperiam laborum suscipit accusantium
        non libero voluptatem aspernatur odit maiores labore blanditiis vitae
        magni nisi praesentium sapiente nihil ipsam, autem animi in eum ipsa
        cumque dolorum. Quo, blanditiis illum reprehenderit, culpa ipsa eos
        dolores rem ea exercitationem iure in? Tempora dolorem quas suscipit
        praesentium quibusdam mollitia eveniet eum, id blanditiis, maiores quia,
        veniam animi? Optio omnis magni unde corrupti tenetur, voluptas iste
        dolores cumque impedit, quisquam vitae consequatur facere itaque
        obcaecati assumenda voluptates nihil nostrum eligendi fuga maiores ex
        quidem! Adipisci, corrupti! Praesentium sapiente, est fugiat dolorum
        repudiandae eligendi cupiditate. Ad, deleniti nam ullam eveniet illum
        quam veniam odit in harum commodi exercitationem dolorem reiciendis quis
        aliquid illo. Perspiciatis dolore pariatur repellat incidunt impedit!
        Placeat quia voluptatibus, voluptatem, harum quos, quasi quaerat
        repellendus labore neque veritatis consequatur repudiandae
        exercitationem? Dolorem ex quaerat repellendus voluptatum quam debitis
        repudiandae culpa, voluptatibus neque voluptates amet iste fugiat est
        voluptate dignissimos mollitia necessitatibus sed enim? Esse minus
        accusamus, ducimus ipsum modi architecto porro nihil dicta explicabo
        illum. Aliquid blanditiis esse aperiam. Fugit vel iure libero non qui
        saepe laboriosam numquam. Labore, laboriosam doloribus corrupti quae
        deserunt numquam, neque consectetur architecto ipsa voluptatum
        reiciendis esse laborum deleniti similique beatae possimus soluta rem,
        maxime aspernatur suscipit nostrum tenetur quidem consequuntur!
        Perspiciatis quibusdam quis excepturi! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quis quidem excepturi ipsam, amet
        perferendis porro, dolorum possimus qui magnam alias provident numquam
        dolores, repellat perspiciatis facere optio officiis soluta non eligendi
        delectus voluptates maxime illo. Illo porro eligendi laboriosam
        reiciendis explicabo fugit nobis velit quidem saepe perspiciatis
        architecto hic eos corporis perferendis suscipit assumenda dolorem iusto
        ea, distinctio blanditiis accusamus tenetur, temporibus, eius ut.
        Blanditiis unde repellendus ex! Magni ab natus minima quas sapiente
        deleniti tempore molestias laboriosam, corporis, beatae cumque
        exercitationem laudantium eos, fuga est! Distinctio omnis vitae amet
        doloribus. Pariatur molestias explicabo iusto eius doloremque? Beatae
        incidunt at officiis aliquam tempora ratione pariatur minus, dignissimos
        corporis, nemo fuga quas expedita omnis ullam. Eveniet perferendis culpa
        eum impedit ad doloribus obcaecati, modi eius enim, eos placeat iusto
        earum fuga autem porro dolorum maiores facilis dolore distinctio magni
        cumque! Minus necessitatibus maiores optio impedit consequatur repellat
        modi nesciunt nemo totam placeat in, expedita nobis libero, quae cumque
        iure aliquam error ullam odio cum dolor? Vel mollitia alias corporis
        quae commodi, eius culpa! Porro provident nam hic ut reiciendis, aliquam
        maiores vitae incidunt amet delectus saepe? Nisi nobis dolorem placeat
        delectus, eum, itaque tempore neque ea non, harum voluptatum hic
        accusantium amet fugit illo dicta provident voluptatibus totam? Ullam
        voluptate ratione, in hic sunt saepe unde cum, ab quaerat eligendi neque
        esse, ea pariatur ut veniam. Illum soluta vero, sed ducimus dolor iure
        rerum libero quasi praesentium recusandae nostrum harum, perferendis
        accusantium! Sint doloribus eum quas, harum, ab animi placeat quidem
        veniam dignissimos qui repellat unde! Doloremque consequatur facere ex
        recusandae, natus, libero repellendus reiciendis ea molestiae in
        deleniti rerum impedit sit, nulla tempora? Est, unde. Expedita sint
        eaque praesentium nostrum placeat. Sed facere vitae aut temporibus
        minima itaque mollitia cupiditate cum nobis laudantium nostrum animi,
        voluptatum quaerat earum iure, enim eaque quod blanditiis aspernatur in?
        Omnis vitae iusto dolor natus magni illo nulla non id odit quae
        praesentium fugit facere in, atque ipsam? Quaerat nemo officiis
        voluptates rem, consequuntur eum sequi excepturi voluptas, fuga sunt hic
        velit error voluptatibus nulla id architecto commodi et? Quis accusamus
        repellat voluptatibus ipsum cupiditate sunt at omnis exercitationem
        culpa accusantium et, ullam in perspiciatis aut non illum magni incidunt
        laboriosam alias placeat sequi quia. Officiis, ullam perferendis, animi
        fuga ipsum rerum qui suscipit nam optio architecto recusandae at illo
        id? Maiores quia unde dolorum fugiat quam saepe ipsam doloremque
        corrupti? Alias laboriosam unde explicabo iste voluptatibus delectus
        voluptate quas ut asperiores amet reiciendis tenetur, dicta quibusdam
        vitae similique error cum, vel beatae rem at quos, dignissimos omnis
        recusandae. Repudiandae laborum maiores, quaerat ex quidem
        exercitationem blanditiis amet similique modi saepe illum voluptatum a!
        Officia praesentium culpa quasi tempora illo similique vero eum labore,
        reiciendis deleniti voluptatum adipisci placeat ad libero quidem at
        iusto recusandae suscipit quae? Perferendis, laborum ipsum eligendi
        architecto deserunt aliquid qui incidunt eaque asperiores saepe ex
        corrupti totam consequuntur accusantium iste repellat dignissimos quas
        eius aut? Dolorem minima perspiciatis nobis eos a. Alias eligendi quod
        tempore quaerat quam fugit voluptatem magni?
      </h1>
    </>
  )
}

export default FirstAnimation
