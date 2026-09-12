/**
 * Constants shared by every page in the Chinese cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * LANG_POLICY is the working-language disclosure /de/, /nl/, /pl/, /se/ and
 * /dk/ already carry, rewritten for a Chinese reader — and here it is doing
 * more work than anywhere else on the site. Brief §22 is explicit: the pages
 * may be in Chinese while support runs in the languages the agency actually
 * works in, and nothing may imply Chinese-speaking advisers or a Chinese
 * support desk, because the repository records neither. So the disclosure says
 * plainly, on every page, what language the work happens in — before anyone
 * has invested an hour in an enquiry, rather than in the middle of a claim.
 *
 * The second paragraph is the one that matters commercially: Portuguese
 * insurers issue policies in Portuguese because the law requires it, and a
 * reader who cannot check the wording themselves is exactly the reader who
 * needs it explained in writing before signing.
 */
export const LANG_POLICY_ZH = {
  heading: '关于语言：网站是中文，服务语言是英语',
  body: [
    '这些页面用中文写成，因为提问的人用中文思考这件事。但具体工作不是用中文进行的：报价、条款解释、往来沟通和理赔协助都以英语书面进行。我们把这一点写在每一页上，而不是让您在理赔当中才发现——那是最不合适的时机。',
    '葡萄牙保险公司依法以葡萄牙语出具保单。这不会因为客户是外国人而改变。我们要做的是：在您签字之前，用英语书面说清保单里写了什么——保额、自负额、除外责任和时限，以及哪些是您以为包含、实际并不包含的部分。如果由亲友或顾问代您核对英文文件会更放心，这样安排完全没有问题。',
  ],
};

/** /zh/ is itself the hub, so product pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: '首页', url: '/zh/' }];
