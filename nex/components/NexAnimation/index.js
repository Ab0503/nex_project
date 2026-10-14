import { motion } from "motion/react";
import get from "lodash.get";
const NexAnimation = (props) => {

  switch (get(props, 'type', 'none')) {
    case 'Left-To-Right':
      return (
        <motion.div
          transition={{ duration: 1, ease: 'easeOut' }}
          initial={{ opacity: 0, x: get(props, 'xBefore', -100) }}
          whileInView={{ opacity: 1, x: get(props, 'xAfter', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Left-To-Right from Top':
      return (
        <motion.div
          transition={{ duration: 1, ease: 'easeOut' }}
          initial={{ opacity: 0, x: get(props, 'xBefore', -100), y: get(props, 'yBefore', -100) }}
          whileInView={{ opacity: 1, x: get(props, 'xAfter', 0), y: get(props, 'yAfter', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Left-To-Right from Bottom':
      return (
        <motion.div
          transition={{ duration: 1, ease: 'easeOut' }}
          initial={{ opacity: 0, x: get(props, 'xBefore', -100), y: get(props, 'yBefore', 200) }}
          whileInView={{ opacity: 1, x: get(props, 'xAfter', 0), y: get(props, 'yAfter', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Right-To-Left':
      return (
        <motion.div
          transition={{ duration: 1, ease: 'easeOut' }}
          initial={{ opacity: 0, x: get(props, 'xBefore', 100) }}
          whileInView={{ opacity: 1, x: get(props, 'xBefore', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Right-To-Left-Rotate':
      return (
        <motion.div
          transition={{ duration: 2 }}
          initial={{ opacity: 0, x: get(props, 'xBefore', 100) }}
          whileInView={{ opacity: 1, x: get(props, 'xBefore', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
          animate={{ rotate: 360 }}
        >
          {props.children}
        </motion.div>
      );
    case 'Right-To-Left from Bottom':
      return (
        <motion.div
          transition={{ duration: 1, ease: 'easeOut' }}
          initial={{ opacity: 0, x: get(props, 'xBefore', 100), y: get(props, 'yBefore', 100) }}
          whileInView={{ opacity: 1, x: get(props, 'xBefore', 0), y: get(props, 'yAfter', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Right-To-Left-From-Top-Rotate':
      return (
        <motion.div
          transition={{ duration: 3 }}
          initial={{ opacity: 0, x: get(props, 'xBefore', 100), y: get(props, 'yBefore', -100) }}
          whileInView={{ opacity: 1, x: get(props, 'xBefore', 0), y: get(props, 'yBefore', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
          animate={{ rotate: 360 }}
        >
          {props.children}
        </motion.div>
      );
    case 'Right-To-Left-From-Top':
      return (
        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: get(props, 'xBefore', 100), y: get(props, 'yBefore', -100) }}
          whileInView={{ opacity: 1, x: get(props, 'xBefore', 0), y: get(props, 'yBefore', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Top-To-Bottom':
      return (
        <motion.div
          transition={{ duration: 1, ease: 'easeOut' }}
          initial={{ opacity: 0, y: get(props, 'yBefore', -100) }}
          whileInView={{ opacity: 1, y: get(props, 'yAfter', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Bottom-To-Top':
      return (
        <motion.div
          transition={{ duration: 1, ease: 'easeOut' }}
          initial={{ opacity: 0, y: get(props, 'yBefore', 100) }}
          whileInView={{ opacity: 1, y: get(props, 'yAfter', 0) }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Fade-In':
      return (
        <motion.div
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Scale-In':
      return (
        <motion.div
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut',type: "spring", stiffness: 150 }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    case 'Fade-Out':
      return (
        <motion.div
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ root: props.scrollRef, once: true }}
        >
          {props.children}
        </motion.div>
      );
    default:
      return <>{props.children}</>;
  }

};

NexAnimation.propTypes = {};

NexAnimation.defaultProps = {};

export default NexAnimation;
