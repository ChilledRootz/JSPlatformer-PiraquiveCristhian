var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                                                                               ",
   "x                          x      x!xxxx!x     xx!!xx   x  x  xxxx              ",
   "x                          x   o  xvx   vx    x  vx  x!x xx x!x                 ",
   "x                       o  x  xx  x xxx  x    x   x  xvx xx xvxxx               ",
   "x                     xxxx!x  xx  x x    xo   x   x  x x o  x xo                ",
   "x                   xxx   v xx oxx  xxxx xxxx!!xx  xx  x    x xxxx              ",
   "x                 xxx                                             x             ",
   "x               xxx                                                             ",
   "x@      o      x|                                                      G      Q ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["  xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx ",
   "  xxx!!!!xxxxxxxxxxxxxxxxxxxxxxxvxxxxxxxxxxxxxxxxxxxxxxvvvxxxxxvxxxxxxxxxxxv  x ",
   "  xxx!!!!!xx                                                                 x ",
   "  x xvx!!!!xxx                                                                x ",
   "  x   xx!!!!!xxxx                                                  o          x ",
   "  x    xxx!!!!!!x                                                             x ",
   "  x      xxxxx!!x                    o                            xxxx        x ",
   "  x          xvvx         xx!!xx                           xx    xx!xxx       x ",
   "  x                     x  xvvx              xx     G            x!!!xxx      x ",
   "  x                               x     x           xx           xxvxxxxx     x ",
   "  x                xx              x!!!x                                      x ",
   "  x                                 xxx                                       x ",
   "  x            o                                                          xxxxx ",
   "  x                    x                                        xxxx          x ",
   "  x                                    xxxxx                  x     xxx       x ",
   "  x          x  x                                                     xx   o  x ",
   "  x  @       x!!x          x      x           x                      o xx     x ",
   "  xxxxxxxxxxxx!!xxxxxxxxxxxx  x   xxxxxxxxxxxxx     xx     xxx     xxxxxxxxxxxx ",
   "  x      o   x!!!!!!!!!!!!!x  x!!!!!!!!!!!!!!x     xxx!!!!!x  x                 ",
   "  x          xxxxxvvxxxvvxxx  x!!!xx  xxxx  xx    xxxx!!!!!x   x                ",
   "  x          o                xxxxx              xxxxx!!!!!x                    ",
   "  x                  o                 o        xxxxxx!!!!!x!!!!!!!!!!!!!!!!!!!!",
   "  x|         x                                 xxxxxxx!!!!!x!!!!!!!!!!!!!!!!!!!!",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["x!!!!x                                                                                                  x",
   "x!!!!x                                                                                                  x",
   "x!!!!x|    G                                                                                            x",
   "x!!!!xxxxxxxxxxo                                                                                        x",
   "x!!!!!!!!!!!!!xx                                                                                        x",
   "x!!!!!!!!!!!xvx                                            o                                            x",
   "xxvxxxxxxxxxx      xx                                     xxxxx                                          x",
   "x                                                                      o                                x",
   "x     o                                                              xxxxx                              x",
   "x   xxxxx  xxxxxxx      x                                  o                                            x",
   "x   x            x     xx                                 xxx                                           x",
   "x  xx            x                              xx        x x                    xx                     x",
   "x   xxxxx  xxx o x                             x          x x        x o x         x                    x",
   "xo  x        xxxxxx                            x          xxx         xxx          x                    x",
   "xx  x             xx                            xo       x   x       x   x       ox                     x",
   "x   x                                            x                               x                      x",
   "x  oxy    o x                                                  oxxxo                                    x",
   "x  xxxxxxxxxxx   xxxxxxx   x                       xx         xx  vxx         xx                        x",
   "x   x       x               x                        x                       x                          x",
   "xo  x      x      o   o      x                           x               x                              x",
   "xx  x     x      xxx xxx      x                         x x      o     yx x                             x",
   "x   x     x   o  x!x x!x      x                            xxx  xxx  xxx                                x",
   "x   x     x   x  xvx xvx  x   x                    xxx        !!!!!!!                                   x",
   "x  xx     x   x           x   x                o              v!!!!!v                                   x",
   "x         o                   o                xx              !!!!!                                    x",
   "x @        oo    x  o  x    oo           x                      !!!                                     x",
   "xxxxx        xxxx  xxx  xxxx            xx                       !                                      x",
   "x    o                             o                                                                    x",
   "x    x   x                    x    x                                                                    x",
   "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x"],
  ["xxxxxx                                                                                                  xxxxxx",
   "x  x x                                                                                                  x x  x",
   "x  xxx                                                                    o                             xxx  x",
   "x                                                                        xxx                                 x",
   "x                                      o                               xxx                                   x",
   "x|                                     x                       x                                             x",
   "xxxxxx                                                 x                                                     x",
   "x                                                                    x            G                          x",
   "x                                                                                 xxxx                       x",
   "x                xx          xx                                                                              x",
   "x                                                                                      x                     x",
   "x                                              xx                                            o               x",
   "x       o                                            o                  Q                  xxxxx             x",
   "x      xx                       xx                   xx              xxxxx                             o     x",
   "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                xxx    x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                         x             x",
   "x                                                                                                            x",
   "x                                                                                                 o          x",
   "x                                                                                                xxx         x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                              xx   xx       x",
   "x                                                                                             x       x      x",
   "x                                                                                           xx    o    xx    x",
   "x                      x     xy  ox  x o yx      x                                         x     xx      x   x",
   "x                      xQ    xxxxxx  xxxxxx     Gx                                         x    x  x     x   x",
   "x                       xxx                   xxx                                          x       xx    x   x",
   "x                        xx                   xx                                            xx    x    xx    x",
   "x                         xx  vxx      xxv  xx                                                x   x   x      x",
   "x                                  o                                                           x  v  x       x",
   "x               xxx   xxx          xx                                                          x    xx       x",
   "x               x       x                                           xxx      xxx               xx    x       x",
   "x               x       x         xxxx                             x!!!x    x!!!x              x     x       x",
   "x             xxx  xxx  xxx    xxx    xxx                                                     xx    xxx      x",
   "x               x       x     x          x                                                   x         xx    x",
   "x               x   o  yx    x     oo     x                                                 x    o      x    x",
   "x               xxxxxxxxx          xx                                o        o             x   xxx     x    x",
   "x                   x                        xxxxx    x  o   yx    xxxxx    xxxxx         xxx    x     xx    x",
   "x      xy   x       x        xxxx         xxxx o x    xxxxxxxxx         !!!!              x o        xx x    x",
   "x      xxxxxx       x        x  xx       x   x   x    x       x         v  v              xxx           x    x",
   "x                   x       xx               x   x    x       x                             xxxxxo      x    x",
   "x                   x              o          x       x o     x   x      G       x               x      x    x",
   "x @                              xxxxx                 xxx    x   x              x                      x    x",
   "xxxx        x   xy  o   x        x   xQ                      xx   x      xx      x        xx o        xxx    x",
   "x           x   xxxxxxxxx    x       xx     xx   x            x    xxy        oxx           xx      xx       x",
   "xy        oyx!!!!!!!x!!!!!!!!x!!!!!!!x!!!!!!!!xxxx    xy      x      xxxxxxxxxxx              xxxxxx         x",
   "xxxxxxxxxxxxx!!!!!!!!!!!!!!!!x!!!!!!!x!!!!!!!!!!!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x"],
  ["      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                      ",
   "      x           xxx  xx  x  x  xxx  xxxx   xx  xxxxx  xxx            x                                      ",
   "      x          x    x  x xx x x     x   x x  x   x   xx              x                                      ",
   "      x          x    x  x x xx x  xx xxxx  xxxx   x     xx            x                                      ",
   "      x           xxx  xx  x  x  xxx  x   x x  x   x   xxx             x                                      ",
   "      x   @ Q o o o o o o o o o o o o o o o o o o o o o o o o o o  o   x                                      ",
   "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxG x                                      ",
   "      x                                                                x                                      ",
   "      x     x     x  xxxxx  x     x      x         x x x    x     x    x                                      ",
   "      x      x   x  x     x x     x      x    x    x x xx   x     x    x                                      ",
   "      x       x x   x     x x     x      x    x    x x x x  x     x    x                                      ",
   "      x        x    x     x x     x      x    x    x x x  x x     x    x                                      ",
   "      x        x    x     x x     x       x  x x  x  x x   xx     o    x                                      ",
   "      x        x  o  xxxxx o xxxxx   oo    xx   xx   x x    x     x    x                                      ",
   "      x                                                                x                                      ",
   "      x                                       o           o            x                                      ",
   "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                      ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
