import list from "../subs.json";

export default (req, res) => {
  let isSub = false
  const { nick } = req.query;
  list.subs.forEach(sub => {
    if(nick === sub) {
      isSub = true
    }
  })
  res.status(200).json({sub: isSub});
};
