using WatiTest;
using WatiTest.Controllers;

namespace TestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var controller = new AddController();
            var request = new IntergerRequest
            {
                IntergerOne = 2,
                IntergerTwo = 3
            };
            var expactedResultData = 5;
            var response = controller.Post(request);
            Assert.AreEqual(expactedResultData, response);
        }
    }
}