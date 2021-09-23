class SyncHook {
  constructor() {
    this.funs = [];
  }

  tap(func) {
    this.funs.push(func);
  }

  call(...args) {
    this.funs.forEach((fun) => {
      fun(...args);
    });
  }
}

const syncHook = new SyncHook();
//同步钩子
//将即将输出的函数堆在一起
syncHook.tap((a) => {
  console.log(a);
});
syncHook.tap((a, b) => {
  console.log(b);
});
syncHook.tap((a, b, c) => {
  console.log(c);
});
//释放
syncHook.call(1, 2, 3);

//syncWaterfallHook瀑布钩子
class SyncWaterfallHook {
  constructor() {
    this.fun = [];
  }

  tap(func) {
    this.fun.push(func);
  }

  call(...args) {
    let [first, ...others] = this.fun;
    let param = first(...args);
    others.reduce((param, func) => {
      return func(param);
    }, param);
  }
}

const syncWaterfallHook = new SyncWaterfallHook();
syncWaterfallHook.tap((a) => {
  console.log(a);
  return a + 1;
});
syncWaterfallHook.tap((a) => {
  console.log(a);
  return a + 1;
});
syncWaterfallHook.tap((a) => {
  console.log(a);
});
syncWaterfallHook.call(10);

//syncLoopHook循环钩子
class SyncLoopHook {
  constructor() {
    this.fun = [];
  }

  tap(func) {
    this.fun.push(func);
  }

  call(...args) {
    this.fun.forEach((func) => {
      let param = func(...args);
      if (param === undefined) return;
      do {
        param = func(param);
      } while (param !== undefined);
    });
  }
}

const syncLoopHook = new SyncLoopHook();
syncLoopHook.tap((a) => {
  console.log(a);
  if (a < 5) {
    a++;
    return a;
  }
});
syncLoopHook.tap(() => {
  console.log("The loop is over!");
});
syncLoopHook.call(1);
