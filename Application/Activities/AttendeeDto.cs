namespace Application.Activities
{
    public class AttendeeDto
    {
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Image { get; set; }
        public int IsHost { get; set; }
        public bool Following { get; set; }
    }
}