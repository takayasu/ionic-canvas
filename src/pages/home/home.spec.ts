
import {describe}
1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ¥

describe('一番最初のテスト', () => {
  it('わざと失敗する',() => {
    except(1+1).toEqual(3);
  });
});
