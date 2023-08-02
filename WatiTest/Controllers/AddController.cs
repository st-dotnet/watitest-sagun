using Microsoft.AspNetCore.Mvc;

namespace WatiTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddController : ControllerBase
    {
        public int Post(IntergerRequest request) 
        {
            try
            {
                if (request.IntergerOne == 0 && request.IntergerTwo == 0)
                    throw new Exception();
                return request.IntergerOne + request.IntergerTwo;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
